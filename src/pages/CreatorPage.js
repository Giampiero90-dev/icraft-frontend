import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectOneCreator } from "../store/creator/selectors";
import { fetchOneCreator } from "../store/creator/actions";
import { useDispatch } from "react-redux";

export default function CreatorPage() {
  const { id } = useParams();
  const creator = useSelector(selectOneCreator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCreator(id));
  }, [dispatch, id]);

  return <div>Creator page</div>;
}
