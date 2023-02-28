import { useDarkModeContext } from "../context/DarkModeContext";

export const Titulos = () => {
    const { darkMode } = useDarkModeContext()

    return (
        <>
            <div className={`title ${darkMode ? 'titlePrincipal' : 'titlePrincipalDark'}`}>Balcarce al galope</div>
        </>
    );
}