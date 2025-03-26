// console.log(process)
// console.log(process.argv)
// console.log(process.pid)
// console.log(process.title)
// console.log(process.arch)
// console.log(process.platform)

process.stdout.write('Stdout\n')
process.stderr.write('Error\n')

process.on('exit', () => {
    console.log('exit');
})