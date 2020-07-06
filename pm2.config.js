module.exports = {
    apps: [
        {
            name: 'newbee-mall',
            script: 'java',
            args: [
                '-jar',
                'target/newbee-mall.jar'
            ],
            cwd: '.',
            interpreter: ''
        }
    ]
};
