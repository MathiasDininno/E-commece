import { useDarkModeContext } from "../context/DarkModeContext";
export const Footer = () => {
    const { darkMode } = useDarkModeContext()
    return (
        <div className={`footer ${darkMode ? 'bodyFooter' : 'cardFooter'}`}>
            <h5 className="h5Footer">@2023- Balcarce al galope. Todos los derechos reservados</h5>
        </div>
    );
}