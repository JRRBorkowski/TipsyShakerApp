import React from "react";
import Link from "next/link";
import navbar from '../../styles/Logobar.module.scss'

const Logobar = () => {
    return (
        <div className={navbar.main}>

            <div className={navbar.logo}>
                <div>:DD</div>
                <div> Tipsy Shaker</div>
            </div>
        </div>
    )
}

export default Logobar