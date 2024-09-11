import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdEmail } from 'react-icons/md';


const CandidateSearch = () => {
  // const to hold current candidate
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    login: '',
    location: '',
    avatar_url: '',
    html_url: '',
    email: '',
    bio: '',
    company: '',
  });

  // const to hold list of candidates
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // const to hold index of the current candidate
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);

  // const to handle the search input
  const [searchInput, setSearchInput] = useState<string>('');

  // const for error handling
  const [error, setError] = useState<string | null>(null);

  // const for no more candidates message
  const [noMoreCandidates, setNoMoreCandidates] = useState<boolean>(false);

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
