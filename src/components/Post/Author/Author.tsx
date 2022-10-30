import React from "react";

import * as styles from "./Author.module.scss";

const Author = () => (
  <div className={styles.author}>
    <a
      className={styles.twitter}
      href={"/"}
      rel="noopener noreferrer"
      target="_blank"
    >
      others
    </a>
  </div>
);

export default Author;
