
import Button from './Button'
import "./nav.css"

function Nav() {
    return (
        <div className="sidebar">
            <h1 className="title">MENU</h1>
            <Button path={"/entries"} name="Get All Entries"/>
            <Button path={"/entry"} name="Get One Entry"/>
            <Button path={"/all-entries"} name="Get All Entries (Including drafts)"/>
            <Button path={"/draft-entry/4laSy4yhr5mqCiXZDVYMlL"} name="Get Draft Entry By Id"/>
            <Button path={"/filter-drafts-entries"} name="Get only Draft Entries"/>
        </div>
    )
}

export default Nav
