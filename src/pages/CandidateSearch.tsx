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


  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
