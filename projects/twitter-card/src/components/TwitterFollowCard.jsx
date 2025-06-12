import { useState } from "react";

export const TwitterFollowCard = ({urlImg, name, formatUserName, userName, isFollowing}) => {
    const [isFollowingBtn, setFollowingBtn] = useState(false);
    // props -> properties -> deben ser imutables.
    // const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-rzZuhiLEqr-GF6WnZGpUkS2zSErzEUYlg&s';
    // children -> lo que se manda da dentro de un component -> example -> <Component>content (puede ser cualquier cosa -> components, etc)</Component>
    // children -> se tomo o se captura como si fuera un prop (urlImg, name, children, etc) y se pinta o renderiza como si fuera un prop.
    // children -> utilizar solo cuando esta dentro de un Component no como prop normal.
    const textBtn = isFollowingBtn ? 'Unfollow' : 'Follow';
    const classNameBtn = isFollowingBtn
        ? 'is-following'
        : '';
    const handleClick = () => {
        setFollowingBtn(!isFollowingBtn)
    }
    return (
        <article>
            <header>
            <img src={urlImg} alt='La img avatar' />
            <div>
                <strong>{name}</strong>
                <div>
                <span>{formatUserName(userName)}</span>
                <span>{isFollowing ? 'Te sigue' : 'No te sigue' }</span>
                </div>
            </div>
            </header>

            <aside>
                {/* button -> children de aside. */}
                <button className={classNameBtn} onClick={handleClick}>
                    <span className="tw-follow-card-textBtn">{textBtn}</span>
                    <span className="tw-follow-card-stop-follow-textBtn">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}