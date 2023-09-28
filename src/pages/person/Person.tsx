import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovieCredits,
  getPersonById,
} from "../../helpers/apiTmdb/apiTmdb.tsx";
import BackDrop from "./components/BackDrop";
import PersonGeneral from "./components/PersonGeneral";
import PageLoading from "../../components/PageLoading";

const Person = () => {
  const params = useParams();
  const [personId, setPersonId] = useState(parseInt(params["id"] || "550", 10));
  const [loading, setLoading] = useState(true);
  const [movieCredits, setMovieCredits] = useState(null);

  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPersonById(personId)
      .then((response) => {
        setPerson(response.data);
      })
      .finally(() => setLoading(false));
    getMovieCredits(personId).then((response) => {
      setMovieCredits(response.data);
    });
  }, []);

  return (
    <>
      {person && (
        <>
          <BackDrop />
          <PersonGeneral person={person} movieCredits={movieCredits} />
        </>
      )}
      <PageLoading loading={loading} />
    </>
  );
};
export default Person;
