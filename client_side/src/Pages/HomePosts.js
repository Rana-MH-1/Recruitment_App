import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../Components/PostList";
import { getPostCount, getPostsAction } from "../Redux/Actions/PostActions";
import { getDataUSer } from "../Redux/Actions/AuthAction";
import { getMyApplies } from "../Redux/Actions/ApplyAction";
import Pagination from "@material-ui/lab/Pagination";
import LimitSelector from "../Components/LimitSelector";
import { makeStyles } from "@material-ui/core/styles";
import './Css/HomePosts.css'
import AddPost from '../Components/AddPost';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
    },
  },
}));

const HomePosts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.Posts.PostList);
  const User = useSelector((state) => state.Auth.User);
  const search = useSelector((state) => state.Filtre);

  useEffect(() => {
    dispatch(getPostCount());
    dispatch(getPostsAction(page, limit));
    dispatch(getDataUSer())
    dispatch(getMyApplies())
  }, []);

  const Filtering = (postList, search) => {
    return postList.filter((post) =>
      post.jobTitle.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  };

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const count = useSelector((state) => state.Posts.count);
  const handlePageChange = (e, p) => {
    setPage(p);
    dispatch(getPostsAction(p, limit));
  };
  return (
    <div className='grid'>
      <div className="posts">
        {User && postList && (
          <PostList PostList={Filtering(postList, search)} page={page} limit={limit} />
        )}
        <div className={classes.root}>
          <Pagination
            count={Math.ceil(count / limit)}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
      <div style={{border: '1px solid #0d2a95',marginTop:'40px',marginRight:'19px',padding:'30px 0',overflowY:'scroll'}}>
        <AddPost page={page} limit={limit} />
        <br/><br/><br/>
        <LimitSelector setLimit={setLimit} />
      </div>
    </div>
  );
};

export default HomePosts;
