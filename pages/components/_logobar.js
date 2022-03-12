import React from "react";
import Link from "next/link";
import navbar from '../../styles/Logobar.module.scss'

const Logobar = () => {
    return (
        <div className={navbar.main}>

            <div className={navbar.logo}>
                <div>TIPSY SHAKER</div>
            </div>
        </div>
    )
}

export default Logobar