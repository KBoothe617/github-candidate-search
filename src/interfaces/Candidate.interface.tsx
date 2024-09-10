// TODO: Create an interface for the Candidate objects returned by the API

// Candidate interface with the following properties: name, login, location, avatar_url, html_url, email, bio, company
interface Candidate {
    readonly name: string | null;
    readonly login: string | null;
    readonly location: string | null;
    readonly avatar_url: string | null;
    readonly html_url: string | null;
    readonly email: string | null;
    readonly bio: string | null;
    readonly company: string | null;
}

export default Candidate;