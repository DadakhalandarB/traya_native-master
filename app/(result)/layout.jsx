import React from 'react';

function layout({children}) {
    return (

        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Female Result</title>
        </head>
        <body>
            {children}
        </body>
        </html>
       
    );
}

export default layout;  