import React from 'react';
import styles from './WhatsNew.module.scss';


const WhatsNew = (): JSX.Element => {
  return (
    <div className={styles.whatsNewDisplay}>
      <h1>What's New in Version 18.0</h1>
      <ul>
        <p>Additional image vulnerability info such as packages name & CVE ID with link - ✅ </p>
        <p>Added drop-down menus that display information about each of the top three vulnerabilities. - ✅</p>
        <p>Vulnerability visualization graph for each image - ✅ </p>
        <p>Image scans can be saved and compared - ✅ </p>
        <p>Users can now rescan images as many times as needed - ✅ </p>
        <p>Updated UI - ✅ </p>
      </ul>
    </div>
  );
};

export default WhatsNew;
