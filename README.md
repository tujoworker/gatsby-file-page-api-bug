# Hot to reproduce the bug

1.  run `yarn`
1.  Start Gatsby by using the start script: `yarn start`
1.  Duplicate `src/pages/folder/`. Give the page a new name,
    e.g. `src/pages/folder-copy/`. Everything is fine.

1.  Delete `src/pages/folder-copy/` again.

1.  Enter another file in the repo (within your code editor), e.g.
    `src/pages/index.js` and hit <b>save</b>.

1.  The error message:

    ```
    Module not found: Error: Can't resolve './../../../src/pages/folder-copy/index.js' in '.../gatsby-file-route-api-bug/.cache/_this_is_virtual_fs_path_/$virtual'
    ```

## Info

- The same bug happens with yarn v1 and v2.
- **NB:** This bug also exists in v2.9.x – the error message is different
  then:

  ```
  gatsby-file-route-api-bug/src/pages/folder-copy/index.js File:
  /gatsby-file-route-api-bug/src/pages/folder-copy/index.js
  ```
