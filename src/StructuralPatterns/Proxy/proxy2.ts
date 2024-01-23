// 錢包介面
interface Wallet {
    withDraw(money: number): void;
    saveMoney(money: number): void;
    getMoney(): void;
}
type Account = {
    account: string;
    password: string;
};
// 實體錢包
class RealWallet implements Wallet {
    account: string = "mike@g.com";
    password: string = "mike@@";
    money: number = 3216541;
    withDraw(money: number): void {
        if (money > this.money) {
            console.log("錢包提醒: 餘額不足!");
        } else {
            this.money -= money;
            console.log(
                `錢包提醒: 成功領取${money}元，餘額剩下${this.money}元。`
            );
        }
    }
    saveMoney(money: number): void {
        this.money += money;
        console.log(`錢包提醒: 成功存錢${money}元，餘額剩下${this.money}元。`);
    }
    getMoney() {
        console.log(`錢包提醒: 餘額剩下${this.money}元。`);
    }
}

// 錢包代理
class ProxyWallet implements Wallet {
    private realWallet: RealWallet | null = null;
    private accessGranted: boolean = false;

    login(loginInfo: Account) {
        if (this.realWallet)
            return console.log("代理系統提醒: 目前帳號登入中，請勿重複登入!");
        const realWallet = new RealWallet();
        if (
            realWallet.account === loginInfo.account &&
            realWallet.password === loginInfo.password
        ) {
            this.realWallet = realWallet;
            this.accessGranted = true;
            console.log("代理系統提醒: 登入成功!");
        } else {
            console.log("代理系統提醒: 登入失敗! 請檢查帳號密碼是否正確");
        }
    }

    logout() {
        if (!this.realWallet)
            return console.log("代理系統提醒: 目前系統無登入帳號!");
        this.realWallet = null;
        this.accessGranted = false;
        console.log("代理系統提醒: 登出成功!");
    }

    withDraw(money: number): void {
        if (!this.accessGranted)
            return console.log("代理系統提醒: 請重新登入後再嘗試!");
        this.realWallet?.withDraw(money);
    }

    saveMoney(money: number): void {
        if (!this.accessGranted)
            return console.log("代理系統提醒: 請重新登入後再嘗試!");
        this.realWallet?.saveMoney(money);
    }

    getMoney(): void {
        if (!this.accessGranted)
            return console.log("代理系統提醒: 請重新登入後再嘗試!");
        this.realWallet?.getMoney();
    }
}

export default () => {
    const proxy = new ProxyWallet();
    proxy.withDraw(564);
    proxy.logout();
    proxy.login({ account: "asd", password: "adgf" });
    proxy.login({ account: "mike@g.com", password: "mike@@" });
    proxy.saveMoney(654);
    proxy.withDraw(989844964);
    proxy.withDraw(36000);
    proxy.logout();
    proxy.getMoney();
};
