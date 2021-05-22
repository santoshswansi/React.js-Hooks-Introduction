import {useEffect} from 'react'

function useDocumentTitle(count) {
    
    useEffect(() => {
        document.title = `${count} Clicks`;
    }, [count]);
}

export default useDocumentTitle;
