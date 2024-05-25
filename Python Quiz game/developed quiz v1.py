import random

def run_quiz(first_run=True):
    if first_run:
        print("Hello and welcome to my Slovak quiz")
        playing = input("Would you like to give it a go?(yes/no) ")
        if playing.lower() != "yes":
            return False
        print("Okay, lets begin!")

    questions = [
        ("What does Auto mean?", "Car"),
        ("What does Strom mean?", "tree"),
        ("What does Kvety mean?", "flowers"),
        ("What does Počítač mean?", "computer"),
        ("What does Rieka mean?", "river"),
        ("What does Hora mean?", "mountain"),
        ("What does Ulica mean?", "street"),
        ("What does More mean?", "sea"),
        ("What does Lekár mean?", "doctor"),
        ("What does Učiteľ mean?", "teacher"),
        ("What does Obchod mean?", "shop"),
        ("What does Koláč mean?", "cake"),
        ("What does Srdce mean?", "heart"),
        ("What does Ruka mean?", "hand"),
        ("What does Nohy mean?", "legs"),
        ("What does Lopta mean?", "ball"),
        ("What does Oblečenie mean?", "clothing"),
        ("What does Zima mean?", "winter"),
        ("What does Leto mean?", "summer"),
        ("What does Deň mean?", "day"),
        ("What does Mesto mean?", "city"),
        ("What does Vlak mean?", "train"),
        ("What does Pes mean?", "dog"),
        ("What does Mačka mean?", "cat"),
        ("What does Okno mean?", "window"),
        ("What does Dvere mean?", "door"),
        ("What does Stôl mean?", "table"),
        ("What does Stolička mean?", "chair"),
        ("What does Pero mean?", "pen"),
        ("What does Kniha mean?", "book"),
        ("What does Časopis mean?", "magazine"),
        ("What does Televízor mean?", "television"),
        ("What does Telefón mean?", "phone"),
        ("What does Hodiny mean?", "clock"),
        ("What does Kľúč mean?", "key"),
        ("What does Láska mean?", "love"),
        ("What does Pivo mean?", "beer"),
        ("What does Víno mean?", "wine"),
        ("What does Jablko mean?", "apple"),
        ("What does Hruška mean?", "pear"),
        ("What does Mrkva mean?", "carrot"),
        ("What does Zelenina mean?", "vegetable"),
        ("What does Ovocie mean?", "fruit"),
        ("What does Mlieko mean?", "milk"),
        ("What does Syr mean?", "cheese"),
        ("What does Vajce mean?", "egg"),
        ("What does Mäso mean?", "meat"),
        ("What does Ryba mean?", "fish"),
        ("What does Hlava mean?", "head"),
        ("What does Telo mean?", "body")
    ]

    selected_questions = random.sample(questions, 20)
    score = 0

    for question, correct_answer in selected_questions:
        answer = input(question + " ")
        if answer.lower() == correct_answer.lower():
            print("Correct!")
            score += 1 
        else:
            print(f"Incorrect! This means {correct_answer}!")

    print(f"You scored {score} out of 20!")
    play_again = input("Would you like to have another go?yes/no ")
    return play_again.lower() == "yes"

first_run = True
while True:
    if not run_quiz(first_run):
        break
    first_run = False

print("Thank you for trying out my quiz!")
    
