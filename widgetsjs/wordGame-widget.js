document.addEventListener('alpine:init', () => {

    Alpine.data('wordGameWidget', function () {
        return {
            word: '',
            longWord: '',
            shortWord: '',
            wordLength: '',
            mySentence() {
                this.longWord = longestWord(this.word);
                this.shortWord = shortestWord(this.word);
                this.wordLength = wordLengths(this.word);

                setTimeout(() => {
                    this.longWord = '';
                    this.shortWord = '';
                    this.wordLength = '';
                    this.word = '';
                }, 5000)
            }
        }
    });
})