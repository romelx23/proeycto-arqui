export interface Props {
    navigation: Navigation
}
export interface Navigation {
    navigate: (routeName: string) => void;
}