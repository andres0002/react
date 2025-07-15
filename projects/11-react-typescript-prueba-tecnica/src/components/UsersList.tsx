// js
// react
// thrid
// own
import { SortBy, type User } from "../interfaces/types.d";

interface IProps {
    sorting: string;
    changeSorting: (sort: SortBy) => void;
    handleDeleteUser: (uuid: string) => void;
    showColors: boolean;
    users: User[];
}

function UsersList({ sorting, changeSorting, handleDeleteUser, showColors, users }: IProps) {
    return (
        <table style={{
            width: '100%'
        }}>
            <thead>
                <tr>
                    <th
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                    >
                        #
                    </th>
                    <th
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                    >
                        Foto
                    </th>
                    <th
                        className="pointer"
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                        onClick={() => {
                            const newSortValue = sorting === SortBy.NONE
                                ? SortBy.NAME
                                : SortBy.NONE;
                            changeSorting(newSortValue);
                        }}
                    >
                        Nombre
                    </th>
                    <th
                        className="pointer"
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                        onClick={() => {
                            const newSortValue = sorting === SortBy.NONE
                                ? SortBy.LAST
                                : SortBy.NONE;
                            changeSorting(newSortValue);
                        }}
                    >
                        Apellido
                    </th>
                    <th
                        className="pointer"
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                        onClick={() => {
                            const newSortValue = sorting === SortBy.NONE
                                ? SortBy.COUNTRY
                                : SortBy.NONE;
                            changeSorting(newSortValue);
                        }}
                    >
                        País
                    </th>
                    <th
                        style={{
                            padding: '10px',
                            border: '1px solid #fff'
                        }}
                    >
                        Acciones
                    </th>
                </tr>
                <tr><th colSpan={5}><br /></th></tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        const backgroundColor = index % 2 === 0 ? '#333' : '#555';
                        const color = showColors ? backgroundColor : 'transparent';
                        return (
                            <tr key={user.login.uuid} style={{
                                    backgroundColor: color
                                }}
                            >
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td style={{
                                        paddingTop: '6px'
                                    }}
                                >
                                    <img
                                        src={user.picture.thumbnail}
                                        alt={`IMG de ${user.name.first}`}
                                    />
                                </td>
                                <td>
                                    {
                                        user.name.first
                                    }
                                </td>
                                <td>
                                    {
                                        user.name.last
                                    }
                                </td>
                                <td>
                                    {
                                        user.location.country
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user.login.uuid)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr><th colSpan={5}><br /></th></tr>
            </tbody>
        </table>
    )
}

// exports
export default UsersList;