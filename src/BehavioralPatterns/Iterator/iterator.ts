namespace IteratorPattern {
    /**
     * Iterator Design Pattern
     *
     * Intent: Lets you traverse elements of a collection without exposing its
     * underlying representation (list, stack, tree, etc.).
     * 意圖：允許您遍歷集合的元素，而不暴露其底層表示（列表、堆疊、樹等）。
     */
    interface Iterator<T> {
        /**
         * Return the current elemeent
         * 返回當前元素
         */
        current(): T;
        /**
         * Return the current element and move forward to next element
         * 返回當前元素並往前移動到下一個元素
         */
        next(): T;
        /**
         * Return the key of the current element
         * 返回當前元素的鍵值
         */
        key(): number;
        /**
         * Checks if current position is valid
         * 檢查目前位置是否有效
         */
        valid(): boolean;
        /**
         * Rewind the Iterator to the first element
         * 將迭代器倒回置第一個元素
         */
        rewind(): void;
    }

    interface Aggregator {
        /**
         * Retrieve an external iterator
         * 檢索外部的迭代器
         */
        getIterator(): Iterator<string>;
    }

    /**
     * Concrete Iterators implement various traversal algorithms.
     *
     * These classes store the current traversal poosition at all times.
     */
    class AlphabeticalOrderIterator implements Iterator<string> {
        private collection: WordsCollection;

        /**
         * Stores the current traversal position.
         * 儲存目前的遍歷位置。
         *
         * An iterator may have a lot of other fields for storing iteration state,
         * 迭代器可能有許多其他欄位用於儲存迭代狀態，
         *
         * especially when it is supposed to work with a particular kind of collection.
         * 特別是當它應該與特定類型的集合一起使用時。
         */
        private position: number = 0;

        /**
         * The variable indicates the traversal direction.
         * 此變數表示遍歷方向。
         */
        private reverse: boolean = false;

        constructor(collection: WordsCollection, reverse: boolean = false) {
            this.collection = collection;
            this.reverse = reverse;

            if (reverse) this.position = collection.getCount() - 1;
        }

        public rewind(): void {
            this.position = this.reverse ? this.collection.getCount() - 1 : 0;
        }

        public current(): string {
            return this.collection.getItems()[this.position];
        }

        public key(): number {
            return this.position;
        }

        public next(): string {
            const item = this.collection.getItems()[this.position];
            this.position += this.reverse ? -1 : 1;
            return item;
        }

        public valid(): boolean {
            if (this.reverse) return this.position >= 0;
            return this.position < this.collection.getCount();
        }
    }

    /**
     * Concrete Collections provide one or several methods for retrieving fresh
     * iterator instances, compatible with the collection class.
     * 具體集合提供一種或多種方法來檢索新的迭代器實例，與集合類別相容。
     */
    class WordsCollection implements Aggregator {
        private items: string[] = [];

        public getItems(): string[] {
            return this.items;
        }

        public getCount(): number {
            return this.items.length;
        }

        public addItems(item: string): void {
            this.items.push(item);
        }

        public getIterator(): Iterator<string> {
            return new AlphabeticalOrderIterator(this);
        }

        public getReverseIterator(): Iterator<string> {
            return new AlphabeticalOrderIterator(this, true);
        }
    }

    /**
     * The client code may or may not know about the Concrete Iterator or Collection classes,
     * 客戶端程式碼可能知道也可能不知道特定迭代器或集合類，
     *
     * depending on the level of indirection you want to keep in your program.
     * 這取決於您想要在程式中保留的間接層級。
     */
    const collection = new WordsCollection();
    collection.addItems("First");
    collection.addItems("Second");
    collection.addItems("Third");

    const iterator = collection.getIterator();

    console.log("Straight traversal:");
    while (iterator.valid()) {
        console.log(iterator.next());
    }

    console.log("");
    console.log("Reverse traversal:");
    const reverseIterator = collection.getReverseIterator();
    while (reverseIterator.valid()) {
        console.log(reverseIterator.next());
    }
}
