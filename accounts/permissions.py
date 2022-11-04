from rest_framework import permissions


class UserPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
         if request.method in permissions.SAFE_METHODS:
            return True
         elif request.method == 'POST':
            return True
         elif request.method == 'DELETE':
            return obj.user == request.user or request.user.is_staff
         elif request.method == 'PUT':
            return obj.user == request.user or request.user.is_staff
         return obj.user == request.user

class IsAdminOrReadOnly(permissions.BasePermission):
   def has_object_permission(self, request, view, obj):
      if request.method in permissions.SAFE_METHODS:
         return True

      return request.user.is_staff