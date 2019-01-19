import * as React from 'react';

interface INavbarComponentProps {
    onSearch: (event: string) => void;
}

export default class NavbarComponent extends React.Component<INavbarComponentProps> {
    private onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        this.props.onSearch(data.get("filter") as string);
        this.setState((prevState) => ({
            ...prevState,
            filter: data.get("filter") as string
        }));
    }

    public render = () => {
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand h1 text-light" href="#">One life item browser</a>
                    <form className="form-inline d-none d-sm-block" onSubmit={this.onSearchSubmit}>
                        <input className="form-control mr-sm-2" type="search" name="filter" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}