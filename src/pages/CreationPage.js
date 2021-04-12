import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchOneCreation } from "../store/creationDetails/actions";
import { selectOneCreation } from "../store/creationDetails/selectors";

export default function CreationPage() {
  const { id } = useParams();
  const creation = useSelector(selectOneCreation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCreation(id));
  }, [dispatch, id]);

  return <div>{creation.title}</div>;
}
