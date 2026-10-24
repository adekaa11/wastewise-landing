import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = [
  { q: "Нужно ли устанавливать приложение?", a: "Нет. WasteWise работает в браузере — достаточно открыть ссылку или отсканировать QR-код." },
  { q: "Как ИИ определяет тип отхода?", a: "Модель YOLO, обученная на датасетах TrashNet, RealWaste и TACO, распознаёт 7 классов отходов с точностью 85.7%." },
  { q: "Что если модель ошиблась?", a: "Нажмите «Исправить» и выберите верный класс. Правка попадает в датасет для дообучения, а вы получаете +15 баллов." },
  { q: "Как считается рейтинг школ?", a: "Баллы начисляются за сканирования, ответы в викторине и исправления модели. Рейтинг агрегируется по классам и школам." },
  { q: "В школе запрещены телефоны. Что делать?", a: "Сканирование можно проводить на классном часе с одного устройства учителя или дома — баллы всё равно идут классу." },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-4 py-28 lg:grid-cols-[1fr_2fr]">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Частые вопросы</h2>
      <Accordion type="single" collapsible>
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
