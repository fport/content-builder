Run th example

1) Extract the react-contentbox.zip file and start the installation

    > cd react-contentbox
    > npm install

2) Run NodeJs server for image/file upload handling (optional, but needed in this example):

    > node server.js

    Note:

    Image/file upload is not part of ContentBox.js functionality.
    It is optional and in this sample project, we use NodeJs (you can use any backend server, eg. PHP, etc).
    With this functionality you can upload local image or video files for embedding into your content.

    Files will be uploaded in uploads/ folder.

3) To start:

    > npm start


Using ContentBox.js in React

ContentBox.js implementation can be seen on: 

    src/components/contentbox/buildercontrol.jsx

1) First, import the library:

    import ContentBox from '@innovastudio/contentbox';

2) Initiallize (In the example, we load the language file first. This is optional):

    this.loadLanguageFile('contentbox/lang/en.js', ()=>{

        this.obj = new ContentBox({
                wrapper: '.is-wrapper',
                /* ... */

        });

    });

    The language file can be added using normal script include, or programmatically like in the example.

The other parts of the code are related with the React implementation:

    - Home.js for page viewing
    - Edit.js for loading the buildercontrol.jsx (where we use ContentBox.js)