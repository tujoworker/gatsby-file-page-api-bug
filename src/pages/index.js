import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>Hot to reproduce the bug</h1>
      <p>This effets at least v3.9.0, but also older versions.</p>
      <ol>
        <li>
          Duplicate <code>src/pages/folder/</code>. Give the page a new name,
          e.g. <code>src/pages/folder-copy/</code>. Everything is fine.
        </li>
        <li>
          Delete <code>src/pages/folder-copy/</code> again.
        </li>
        <li>
          Enter another file in the repo (within your code editor), e.g.
          <code>src/pages/index.js</code> and hit <b>save</b>.
        </li>
        <li>
          The error message: <br />
          <code>
            Module not found: Error: Can't resolve
            './../../../src/pages/folder-copy/index.js' in
            '.../gatsby-file-route-api-bug/.cache/_this_is_virtual_fs_path_/$virtual'
          </code>
        </li>
      </ol>

      <p>
        NB: This bug also exists in v2.9.x – the error message is different
        then: <br />
        <code>
          gatsby-file-route-api-bug/src/pages/folder-copy/index.js File:
          /gatsby-file-route-api-bug/src/pages/folder-copy/index.js
        </code>
      </p>
    </div>
  )
}
