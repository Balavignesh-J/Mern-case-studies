interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of Rs ${amount} via Stripe`);
    return true;
  }
}

class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of Rs ${amount} via PayPal`);
    return true;
  }
}

class BankTransferGateway implements PaymentGateway {
  constructor(private sender: string, private receiver: string) {}

  async processPayment(amount: number): Promise<boolean> {
    console.log(
      `Processing bank transfer of Rs ${amount} from ${this.sender} to ${this.receiver}`
    );
    return true;
  }
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  }
}

class MockFailGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of Rs ${amount}`);
    return false;
  }
}

const stripeProcessor = new PaymentProcessor(new StripeGateway());
stripeProcessor.pay(186);

const paypalProcessor = new PaymentProcessor(new PaypalGateway());
paypalProcessor.pay(629);

const bankProcessor = new PaymentProcessor(
  new BankTransferGateway("Kamal", "Rajini")
);
bankProcessor.pay(842);

const testProcessor = new PaymentProcessor(new MockFailGateway());
testProcessor.pay(492);