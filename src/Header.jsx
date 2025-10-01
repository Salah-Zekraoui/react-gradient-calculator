
function Header() {
    return (
        <header className="bg-gradient-to-r from-stone-800/90 to-stone-700/90 p-8 shadow-2xl border-b border-stone-600/50">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-mono text-4xl text-white text-center font-light tracking-wider">Calculator</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-green-400 mx-auto mt-3 rounded-full"></div>
            </div>
        </header>
    );
}

export default Header;
