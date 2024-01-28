import { useState } from "react";

import KeywordDetail from "../components/keyword/KeywordDetail";
import KeywordEdit from "../components/keyword/KeywordEdit";

import { usePagesContext } from "../contexts/PagesContext";

function Keyword() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/keywords");

  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <KeywordEdit setIsEdit={setIsEdit} />
  ) : (
    <KeywordDetail setIsEdit={setIsEdit} />
  );
}

export default Keyword;
