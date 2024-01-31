import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import KeywordDetail from "../components/keyword/KeywordDetail";
import KeywordEdit from "../components/keyword/KeywordEdit";

import { usePagesContext } from "../contexts/PagesContext";

function Keyword() {
  const { user } = useLoaderData();

  if (!user.login) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    setActiveButton("/keywords");

    const [isEdit, setIsEdit] = useState(false);

    return isEdit ? (
      <KeywordEdit setIsEdit={setIsEdit} />
    ) : (
      <KeywordDetail setIsEdit={setIsEdit} userId={user.id} />
    );
  }
}

export default Keyword;
