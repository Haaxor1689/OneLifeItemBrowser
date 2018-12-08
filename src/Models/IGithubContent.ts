export interface IGithubContentContainer {
    [name: string]: IGithubContent;
}

export default interface IGithubContent {
    name: string;
    path: string;
    sha: string;
    download_url: string;
    git_url: string;
    html_url: string;    
}