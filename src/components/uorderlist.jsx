import React from "react";
import styles from '../components/style.module.css'

function Answer(){

    return (
        <div>
            <h1>Mobile Operating System</h1>
            <ul>
              <li>Android</li>
              <li>Blackberry</li>
              <li>window phone</li>
          </ul>
        </div>
    )
};
function Answer1(){

    return (
        <div>
           <h1>Mobile Manufacturers</h1>
            <ul>
               <li className={styles.li1}>Samsung</li>
                <li className={styles.li1}>HTC</li>
               <li className={styles.li2}>MicroMax</li>
               <li className={styles.li3}>Apple</li>
           </ul>
        </div>
    )
};

export {Answer,Answer1};