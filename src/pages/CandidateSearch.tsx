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

  // const for user search input checking if the user data is not empty 
  const handleSearch = async () => {
    try {
      const userData = await searchGithubUser(searchInput);
      if (Object.keys(userData).length === 0) {
        setError('User not found');
        setCurrentCandidate({
          name: '',
          login: '',
          location: '',
          avatar_url: '',
          html_url: '',
          email: '',
          bio: '',
          company: '',
        });
      } else {
        const fetchedCandidate: Candidate = {
          name: userData.name || 'No name available',
          login: userData.login,
          location: userData.location || 'No location available',
          avatar_url: userData.avatar_url || 'No avatar available',
          html_url: userData.html_url || 'No address available',
          email: userData.email || 'No email available',
          bio: userData.bio || 'No bio available',
          company: userData.company || 'No company available',
        };
        setCurrentCandidate(fetchedCandidate);
        setError(null);
      }
    } catch (error) {
      setError('Error fetching user data');
    }
  };

  // function to handle moving to the next candidate
  const moveToNextCandidate = () => {
    if (noMoreCandidates) {
      setError('No more candidates');
      return;
    }
    if (candidates.length === 0) {
      setError('No candidates to show');
      return;
    }
    if (currentCandidateIndex + 1 < candidates.length) {
      const nextIndex = currentCandidateIndex + 1;
      setCurrentCandidateIndex(candidates[nextIndex]);
      setCurrentCandidateIndex(nextIndex);
    } else {
      setNoMoreCandidates(true);
    }
  }

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
