import { useState } from "react"

const useContent = () => {
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState(false);
    const [error, setError] = useState(false);


    return {
        loading,
        view,
        error,
        setLoading,
        setView,
        setError
    }
}

export default useContent;