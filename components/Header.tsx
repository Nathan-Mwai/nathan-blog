import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const Header = () => {
    return (
        <>
            <div className={'flex flex-col h-[350px] w-full gap-y-6 justify-center items-center mb-8'}>
                <Badge variant={'secondary'} className={'text-sm'}>Nathan&apos;s WorkShop</Badge>
                <div className="flex items-center justify-center px-4">
                    <h1 className="text-4xl font-bold text-center max-w-screen-md">
                        Lessons and Research for the <span className={'italic'}>future</span> tech guru.
                    </h1>
                </div>
                <div className="flex sm:w-[400px] flex-col md:flex-row gap-3">
                    <Input className="w-full md:flex-1" placeholder="Your Email..." />
                    <Button className="w-full p-6 md:w-1/3">Subscribe</Button>
                </div>

                <p className={'text-slate-500 text-sm'}>No spam, unsubscribe anytime</p>
            </div>
        </>
    )
}
export default Header
