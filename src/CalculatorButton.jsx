function CalculatorButton({ children, onClick, variant = 'number', className = '' }) {
    const baseStyles = "text-2xl font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 border";
    
    const variants = {
        number: "bg-gradient-to-br from-stone-600 to-stone-700 hover:from-stone-500 hover:to-stone-600 text-white border-stone-500/50",
        operation: "bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white border-orange-400/50 hover:shadow-orange-400/20",
        equals: "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-green-400/50 hover:shadow-green-400/20",
        clear: "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white border-red-400/50 hover:shadow-red-400/20"
    };

    return (
        <button 
        onClick={onClick} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        >
        {children}
        </button>
    );
}

export default CalculatorButton;