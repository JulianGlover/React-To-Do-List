from django.test import TestCase

class ToDoListViewsTestCase(TestCase):

    #Test to ensure that the application returns the index page and correct index template.
    def test_index(self):
        resp = self.client.get('/')
        self.assertEqual(resp.status_code, 200)
        self.assertTemplateUsed(resp, 'ToDoList/index.html')
