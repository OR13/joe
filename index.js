

exports = module.exports = Joe = new JoeSingleton()

if (typeof window !== 'undefined') {
    window.Joe = Joe
}
