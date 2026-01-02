class Feedback<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T) {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

function getFirstItem<T>(items:T[]): T | undefined {
    if (items) {
        return items[0];
    }
}

let feedback1 = new Feedback<string>();
feedback1.addFeedback("Nice");
feedback1.addFeedback("Awesome");
feedback1.addFeedback("Wonderful");
console.log(feedback1.getAllFeedback());
console.log(getFirstItem(feedback1.getAllFeedback()));


let feedback2 = new Feedback<number>();
feedback2.addFeedback(8);
feedback2.addFeedback(9);
feedback2.addFeedback(5);
console.log(feedback2.getAllFeedback());
console.log(getFirstItem(feedback2.getAllFeedback()));