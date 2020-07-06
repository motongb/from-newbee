module.exports = {
    apps: [
        {
            name: 'newbee-mall',
            script: 'java',
            args: [
                '-jar',
                'target/newbee-mall.jar',
                '--server.port=8000',
                '--upload.path=/root/upload/'
            ],
            cwd: '.',
            interpreter: ''
        }
    ]
};
