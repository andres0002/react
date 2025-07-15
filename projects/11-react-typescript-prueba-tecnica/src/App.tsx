// js
// react
import { useState, useMemo } from 'react'
// third
// own
import './App.css'
import { SortBy, type User } from './interfaces/types.d'
import UsersList from './components/UsersList'
import { useUsers } from './hooks/useUsers'
import Results from './components/Results'

function App() {
  const {
    isLoading,
    isError,
    users,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useUsers();
  // const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState<boolean>(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  // const originalUsers = useRef<User[]>([]);
  // useRef -> para guardar un valor
  // que queremos que se comparta entre renderizados
  // pero que al cambiar su valor no vuleva a renderizar el component.
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  const toggleColors = () => {
    setShowColors(!showColors);
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  }

  const handleDeleteUser = (uuid: string) => {
    // const filteredUsers = users.filter((user) => user.login.uuid !== uuid);
    // setUsers(filteredUsers);
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  }

  const handleResetUsers = async () => {
    // setUsers(originalUsers.current);
    await refetch();
  }

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase());
      })
      : users;
  }, [users, filterCountry]);

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers;

    const compareProperties: Record<string, (user: User) => string> = {
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last,
      [SortBy.COUNTRY]: user => user.location.country
    }

    return filteredUsers.toSorted((a, b) => {
      const extractPropertyValue = compareProperties[sorting];
      return extractPropertyValue(a).localeCompare(extractPropertyValue(b));
    });
  }, [filteredUsers, sorting]);

  return (
    <>
      <h1>React + TypeScript - Prueba Técnica</h1>
      <Results />
      <header style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button onClick={toggleColors}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry}>
          {
            sorting === SortBy.COUNTRY
              ? 'No ordenar por país'
              : 'Ordenar por país'
          }
        </button>
        <button onClick={handleResetUsers}>
          Resetear estado
        </button>
        <input
          type="text"
          placeholder='Filter por país'
          onChange={(event) => {
            // console.log(event.target.value);
            setFilterCountry(event.target.value);
          }}
        />
      </header>
      <main>
        {
          users.length > 0 &&
          <>
            <UsersList
              sorting={sorting}
              changeSorting={handleChangeSort}
              handleDeleteUser={handleDeleteUser}
              showColors={showColors}
              users={sortedUsers}
            />
            {/* <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <button
                onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)}
              >
                Back
              </button>
              <p>Page {currentPage}</p>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div> */}
            {
              hasNextPage && <button
                onClick={() => fetchNextPage()}
              >
                Show more users
              </button>
            }
            {
              !hasNextPage && <p>No more results...</p>
            }
          </>
        }
        {
          isLoading && <p>Loading...</p>
        }
        {
          !isLoading && isError && <p>Error...</p>
        }
        {
          !isLoading && !isError && users.length === 0 && <p>No users...</p>
        }
      </main>
    </>
  )
}

// exports.
export default App
