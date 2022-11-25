import DragDropInput from "../components/DragDropInput";
import {useEffect, useState} from "react";

export default function HomePage() {
    const [test, setTest] = useState(null);
    useEffect(() => {
        if(test == null) {
            const response = fetch('http://localhost:8000/').then((response) => {
                if (response.ok) {
                    return response.json()
                }
            });
            response.then((data) => setTest(data));
        }
    }, [test]);

    return (
      <DragDropInput/>
    );
}