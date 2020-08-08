import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/instance";
import Return from "@dikac/t-validator/validatable/validatable";
export default class NotNull<Msg> implements ValidatorAbstract<unknown, null, Readonly<Instance<unknown, Msg, true>>, Readonly<Instance<null, Msg, false>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>);
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, null, Readonly<Instance<Argument, Msg, true>>, Readonly<Instance<null, Msg, false>>>;
}
