import { Icon, IconBackground, SwitchButton, SwitchSection, SwitchText } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkMode } from "./themeSlice";

const Switch = () => {
    const isDarkMode = useSelector(selectIsDarkMode);
    const dispatch = useDispatch();
    return (
        <SwitchSection>
            <SwitchText>
                DARK MODE {isDarkMode ? "ON" : "OFF"}
            </SwitchText>

            <SwitchButton onClick={() => dispatch(toggleTheme())}>
                <IconBackground moveToRight={isDarkMode}>
                    <Icon />
                </IconBackground>
            </SwitchButton>
        </SwitchSection>
    )
}

export default Switch;