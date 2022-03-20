import react, {useState, useEffect, useRef} from "react";

function useSticky () {
    const [isSticky, setSticky] = useState(false)
    const element = useRef(null)

    const handleScroll = () => {
        window.scrollY > element.current.getBoundingClientReact().bottom
        ? setSticky(true)
        : setSticky(false)
    }

    const debounce = (func, wait = 20, inmediate = true) => {
        let timeOut
        return () => {
            let context = this, 
            args = arguments
            const later = () => {
                timeOut = null
                if (!inmediate) func.apply(context, args)
        }
        const callNow = inmediate && !timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

useEffect (() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
        window.removeEventListener("scroll", () => handleScroll)
    }
}, [debounce, handleScroll])

    return {isSticky, element}
}

export default useSticky