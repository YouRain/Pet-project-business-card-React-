import React, { ReactNode } from "react";

interface IDivP {
    class_div?: string
    class_a?: string
    class_h2?: string
    class_h3?: string
    class_h4?: string
    class_p?: string

    href_a?: string

    children?: ReactNode | string
    content_a?: string
    content_h2?: string
    content_h3?: string
    content_h4?: string
    content_p?: string | number
}

function BoxContent(
    {
        class_div,
        class_a,
        class_h2,
        class_h3,
        class_h4,
        class_p,
        href_a,
        children,
        content_a,
        content_h2,
        content_h3,
        content_h4,
        content_p
    }: IDivP) {
    return (
        <div className={class_div}>

            {children}

            {content_a &&
                <a className={class_a} href={href_a}>{content_a}</a>
            }

            {content_h2 &&
                <h2 className={class_h2}>{content_h2}</h2>
            }

            {content_h3 &&
                <h3 className={class_h3}>{content_h3}</h3>
            }

            {content_h4 &&
                <h4 className={class_h4}>{content_h4}</h4>
            }

            {content_p &&
                <p className={class_p}>{content_p}</p>
            }
        </div>
    )
}

export default BoxContent;