let container = new Map<string, any>();

function Injectable(args: any) {
  return function (target: any): void {
    container.set(args["key"], new target());
  };
}

function Inject(name: string) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => container.get(name),
      configurable:true
    });
  };
}

@Injectable({ key: "TestInjectable" })
class TestInjectable {}

class TestInject {
  @Inject("TestInjectable")
  private testField: TestInjectable;

  public print(): void {
    console.log(this.testField);
  }
}

const test = new TestInject();
test.print();
