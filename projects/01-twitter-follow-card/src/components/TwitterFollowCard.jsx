// js
// react
import { useState } from "react";
// third
// own

export const TwitterFollowCard = ({urlImg, name, formatUserName, userName, isFollowing}) => {
    const [isFollowingBtn, setFollowingBtn] = useState(false);
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