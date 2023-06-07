export default class {
    public static ansi(code: string): string{
        return `\u001b[${code}m`
    }
    public static reset = this.ansi("0")
    public static format = {
        bold: this.ansi("1"),
        underline: this.ansi("3"),
        mirror: this.ansi("7")
    }
    public static color = {
        black: this.ansi("30"),
        red: this.ansi("31"),
        green: this.ansi("32"),
        yellow: this.ansi("33"),
        blue: this.ansi("34"),
        pink: this.ansi("35"),
        purple: this.ansi("36"),
        white: this.ansi("37"),
    }
}