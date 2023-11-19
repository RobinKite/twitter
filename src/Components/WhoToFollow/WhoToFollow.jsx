import React, { useState } from "react";
import classNames from "classnames";
import styles from "./WhoToFollow.module.scss";
import RecommendedUsers from "../RecommendedUsers/RecommendedUsers";

const WhoToFollow = () => {
  return (
    <div className={classNames(styles.container)}>
      <h2 className={classNames(styles.title)}>Who to follow</h2>
      <RecommendedUsers />
      <div className={classNames(styles.showMore)}>
        <a href="#">Show more</a>
      </div>
    </div>
  );
};

export default WhoToFollow;
